# dockside-payments-service

Authorizes card payments for **Dockside Market** orders.

| | |
|---|---|
| Owner | Payments team |
| Tier | 1 (revenue-critical) |
| Called by | `dockside-checkout-api` |

## API

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Liveness and version |
| `POST` | `/payments/authorize` | Authorize a card payment |

## Run locally

```bash
npm start
npm test
npm run smoke
```

## Delivery pipeline

`ci.yml` (PR tests), `deploy.yml` (rollout + post-deploy smoke test, raises an `alert` issue on failure), `rollback.yml` and `followup.yml` (dispatched by Port).

> Part of the Dockside Market demo for Port's **self-healing incidents** solution. The production rollout is simulated inside the GitHub Actions runner.
