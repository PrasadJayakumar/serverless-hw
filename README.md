# Profile API

## Setup

```sh
yarn install
```

## Deploy

```
$ serverless deploy --stage dev

Deploying profiles-api to stage dev (us-east-1)

✔ Service deployed to stack profiles-api-dev (60s)

endpoints:
  POST - https://zp5xwprtrg.execute-api.us-east-1.amazonaws.com/profiles
  GET - https://zp5xwprtrg.execute-api.us-east-1.amazonaws.com/profiles/{id}
functions:
  create: profiles-api-dev-create (63 kB)
  get: profiles-api-dev-get (63 kB)

Monitor all your API routes with Serverless Console: run "serverless --console"
Done in 64.16s.
```

## Usage

### Create

```sh
curl -X POST https://zp5xwprtrg.execute-api.us-east-1.amazonaws.com/profiles --data '{"name":"Jayakumar"}'
```

### Get

```sh
curl https://zp5xwprtrg.execute-api.us-east-1.amazonaws.com/profiles/9693c630-1e4f-11ed-bfa1-15f45d84297f
```

Example response

```json
{"name":"Prasad","profileId":"1"}
```
