# How to use
## Repositories and SpaControllers
<procedure title="Console Commands">
    <step>
        <code-block>php artisan make:repository-interface {interfaceName}</code-block>
        <p>Creates a new RepositoryInterface. This is mostly used as a placeholder for laravels dependency injection</p>
        <p>Interface is created at <strong>app/Repository/Interfaces/{interfaceName}.php</strong></p>
    </step>
    <step>
        <code-block>php artisan make:repository {repositoryName} {modelName}</code-block>
        <p>Creates a new Repository for a Model. Accepts the two parameters for {repositoryName} and {modelName}.</p>
        <p>Interface is created at <strong>app/Repository/{repositoryName}.php</strong></p>
        <p>{modelName} must be an existing model in app/Models</p>
    </step>
    <step>
        <code-block>php artisan make:spa-controller {controllerName} {repositoryInterfaceName}</code-block>
        <p>Creates a new SpaController with a given repositoryInterface. Accepts the two parameters for {repositoryName} and {modelName}.</p>
        <p>Interface is created at <strong>app/Repository/{repositoryName}.php</strong></p>
        <p>{modelName} must be an existing model in app/Models</p>
    </step>
</procedure>
<procedure title="Register dependency injection">
    <step>
        <p>(optional) Create a dedicated RepositoryRegistrationServiceProvider</p>
        <code-block>php artisan make:provider RepositoryRegistrationServiceProvider</code-block>
    </step>
    <step>
        <p>Inside app/Providers/AppServiceProvider add the following line into the <strong>register()</strong> function</p>
        <code-block>
            public function register(): void
            {
                ...
                $this->app->register(RepositoryRegistrationServiceProvider::class);
                ...
            }
        </code-block>
    </step>
    <step>
        <p>
            Inside RepositoryRegistrationServiceProvider or AppServiceProviders <strong>register()</strong> function
            add the previously created Repositories and Interfaces to the dependencyInjection:
        </p>
        <code-block>
            public function register(): void
            {
                ...
                $this->app->bind({InterfaceClass}::class, {RepositoryClass}::class);
                ...
            }
        </code-block>
        <p>
            Replace {InterfaceClass} with the classpath to your previously created RepositoryInterface.
        </p>
        <p>
            Replace {RepositoryClass} with the classpath to your previously created Repository, matching the RepositoryInterface.
        </p>
    </step>
</procedure>
