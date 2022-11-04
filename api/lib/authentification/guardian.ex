defmodule Api.Guardian do
  use Guardian, otp_app: :api
  alias Api.Accounts

  def subject_for_token(resources, _claims) do
    sub = to_string(resources.id)
    {:ok, sub}
  end

  def subject_for_token(_, _) do
    {:error, :reason_for_error}
  end

  def resource_from_claims(claims) do
    id = claims["sub"]
    resources = Accounts.get_user!(id)
    {:ok, resources}
  end

  def resource_from_claims(_claims) do
    {:error, :reason_for_error}
  end
end
