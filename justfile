_default:
    just --list

# build_container:
#     docker build --tag homepage .

# deploy_container ssh_target: build_container
#     docker save homepage:latest | zstd -T8 -10 | ssh {{ssh_target}} "docker load && docker rm -f homepage && docker run -d -p 3000:3000 --restart always homepage:latest"

format:
    pnpm run format

dev:
    pnpm run dev

build_static: format
    pnpm build

deploy ssh_target: build_static
    rsync -azv --chown=root:homepage_dev --chmod=D775,F664 --del -O ./build/* {{ssh_target}}:/var/www/homepage
