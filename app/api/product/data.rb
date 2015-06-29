module Product
  class Data < Grape::API

    resource :list do 
      desc "List all Lists"
      get do 
        List.all
      end

      desc "create a new product list"
      params do 
        requires :name, type: String
        requires :category, type: String
        requires :price, type: Integer
      end

      post do 
        List.create!({
          name:params[:name],
          category:params[:category],
          price:params[:price]
        })
      end

      desc "delete a list"
      params do 
        requires :id, type: String
      end
      delete ':id' do 
        List.find(params[:id]).destroy!
      end

      desc "update list"
      params do 
        requires :id, type: String
        requires :cateogry, type: String
      end
      put ':id' do 
        List.find(params[:id]).update({
          category:params[:category]
          })

    end
  end
end