Rails.application.routes.draw do
 
  get '/', to: redirect('/')

  scope '/list' do 
    resources :lists
  end

end
