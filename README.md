# GenericSpaTemplate

This is a sample project explaining all the steps needed to create a generic SPA template using .Net 5. For showing off purposes, a sample of the available angular application from the angular dotnet template has been provided.

The main idea behind this is being able to have a template ready to code a Backend4Frontend in an easy manner, make it easy to publish/deploy, and not need IIS for the publication/serve part of the SPA.

Because this is an early version of "my very own approach" on how the process should be, this repo and all of its content is subjected to fair criticism and change over time.

## Instalation

The dotnet part is pretty straight forward. Once in the solution folder, just use visual studio or build the solution from console
```bash
dotnet restore
dotnet build
dotnet run --project ./GenericSpaTemplate/GenericSpaTemplate.csproj
```

The SPA part is also pretty straight forward. Go to the SPA client folder and install node packages and keep the app running
```bash
npm i
npm run watch
```

## Considerations

The angular proyect uses a proxy config to route the main requests to the B4FE. Depending if you are running/debugging in terminal or in visual studio you will need to change both the application port in the proxy config AND in the Startup class.