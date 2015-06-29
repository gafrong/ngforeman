class API < Grape::API

  version 'v1', using: :path
  mount Product::Data
end