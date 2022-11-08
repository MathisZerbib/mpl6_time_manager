defmodule Api.Guardian.Pipeline do
  use Guardian.Plug.Pipeline, otp_app: :Api,
  module: Api.Guardian,
  error_handler: Api.ErrorHandler

  plug Guardian.Plug.VerifyHeader, realm: "Bearer"
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
