# Inside this Turborepo

- Global Component
- Global Context
- Lates NextJS Version (13.3.0)

# Turborepo workspace

There has main `workspace`, `latestnext` workspace, `morelatest` and `ui`
Fist you need to install the main package with `npm` or `pnpm`

- `npm install` or `pnpm install`

next step is install each workspace (`latestnext`, `morelatest` and `ui`)

- `pnpm install --workspace=latestnext`
- `pnpm install --workspace=morelatest`
- `pnpm install --workspace=ui`

# Start the turborepo

- `pnpm turbo run dev` for development
- `pnpm turbo run build` to build your app
- `pnpm turbo run lint` detect something wrong inside your apps
