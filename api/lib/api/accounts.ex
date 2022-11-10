defmodule Api.Accounts do

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Accounts.User
  alias Api.Guardian
  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]

  def list_users do
    Repo.all(User)
  end

  def token_sign_in(email, password_hash) do
    case email_password_auth(email, password_hash) do
      {:ok, user} ->
        Guardian.encode_and_sign(user)
      _ ->
        {:error, :unauthorized}
    end
  end


  defp email_password_auth(email, password_hash) when is_binary(email) and is_binary(password_hash) do
    with {:ok, user} <- get_by_email(email),
    do: verify_password(password_hash, user)
  end


  defp get_by_email(email) when is_binary(email) do
    case Repo.get_by(User, email: email) do
      nil ->
        dummy_checkpw()
        {:error, "Login error."}
      user ->
        {:ok, user}
    end
  end

  defp verify_password(password_hash, %User{} = user) when is_binary(password_hash) do
    if checkpw(password_hash, user.password_hash) do
      {:ok, user}
    else
      {:error, :invalid_password}
    end
  end

  def get_user!(id), do: Repo.get!(User, id)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  def change_user(%User{} = user, attrs \\ %{}) do
    User.changeset(user, attrs)
  end
end
