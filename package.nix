{
  pkgs,
  lib,
  pnpm_10,
  nodejs_24,
  pnpmConfigHook,
  fetchPnpmDeps,
  git_ref ? "",
  git_branch ? "",
}:
pkgs.stdenv.mkDerivation (finalAttrs: {
  pname = "julia-homepage";
  version = (builtins.fromJSON (builtins.readFile ./package.json)).version;
  src = ./.;

  nativeBuildInputs = [
    nodejs_24
    pnpmConfigHook
    pnpm_10
  ];

  buildPhase = ''
    runHook preBuild
    pnpm run build
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall
    cp -r build $out
    runHook postInstall
  '';

  env = {
    __GIT_REF__ = git_ref;
    __GIT_BRANCH__ = git_branch;
  };

  pnpmDeps = fetchPnpmDeps (
    let
      root = finalAttrs.src;
    in
    {
      inherit (finalAttrs) pname version;
      src = lib.fileset.toSource {
        inherit root;
        fileset = lib.fileset.fileFilter (
          { name, ... }:
          builtins.elem name [
            "package.json"
            "pnpm-lock.yaml"
          ]
        ) root;
      };
      fetcherVersion = 3;
      pnpm = pnpm_10;
      hash = "sha256-AJAoPdqdNIZ0heWlFGdohs/tfQBeiK3R/gNRcihq98U=";
    }
  );
})
