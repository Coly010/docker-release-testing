# Docker Release Testing

## Quick Start
1. Run `pnpm i`
2. Run `pnpm nx run-many -t build --parallel=4`
3. Run `pnpm nx local-registry`
4. Run `pnpm nx release --projects shared-utils --first-release` Use Custom Exact Version: `0.0.1`

## Release Findings
Running `pnpm nx release` currently only finds the JS Package to release and not the applications


## Structure
Repo contains:

**Apps**  
- **api**: Express Application with Docker
- **web**: Angular Application with Docker

**Packages**  
- **shared-utils**: JS Library published to npm registry

**api** -> dependsOn -> **sharedUtils**
**web** -> dependsOn -> **sharedUtils**

**Tooling**  
- **docker-plugin**: Nx Plugin to provide Docker Plugin for inferring `docker build`, `docker run` and `VersionActions`.

## Docker Plugin

The Docker Plugin has:  
- **release-publish executor**: Handles pushing the tagged image to docker registry
- **version-actions**: Handles versioning of docker images
- **inference plugin**: Handles inferring the docker targets to the projects



