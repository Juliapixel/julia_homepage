{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-26.05";
  };

  outputs =
    { self, nixpkgs }: {
      packages.x86_64-linux.default = nixpkgs.legacyPackages.x86_64-linux.callPackage ./package.nix {
        git_ref = self.rev or self.dirtyRev;
        git_branch = "main";
      };
      devShells.x86_64-linux.default =
        let
          pkgs = nixpkgs.legacyPackages.x86_64-linux;
        in
          pkgs.mkShell {
            packages = with pkgs; [
              nodejs_24
              pnpm_10
              just
            ];
          };
    };
}
