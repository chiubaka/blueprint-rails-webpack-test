# README
Some documentation on how this repo was configured:
1. Following instructions from [rails/webpacker](https://github.com/rails/webpacker), created a new Rails app with Webpack + React by running `rails new blueprint-rails-webpack-test --webpack=react`
2. Updated `config/initializers/content_security_policy.rb` as suggested by message during install.

```
Rails.application.config.content_security_policy do |policy|
  policy.connect_src :self, :https, "http://localhost:3035", "ws://localhost:3035" if Rails.env.development?
end
```

3. Fixed unmet peer dependency warnings with `yarn upgrade`, then installing `@babel/core` and `webpack` as dev dependencies.
4. Added the `javascript_pack_tag` and `stylesheet_pack_tag` helpers to `app/views/layouts/application.html.erb`.
5. Added `root "home#index"` to the `routes.rb`. Also added a trivial `HomeController` to `app/controllers/` and stub `index.html.erb` to `app/views/home/`
6. Added a trivial Blueprint Popover example to `app/javascript/packs/hello_react.jsx`.

Run this repo by running `bundle exec rails server` inside the repo. To activate `webpack-dev-server`, run `./bin/webpack-dev-server` in a parallel process.
