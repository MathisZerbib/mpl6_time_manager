defmodule Api.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  import Comeonin.Bcrypt, only: [hashpwsalt: 1]

  schema "users" do
    field :email, :string
    field :username, :string
    field :password_hash, :string
    field :role, :string
    field :team, :string

    timestamps()
  end

  def changeset(user, attrs) do
      user
      |> cast(attrs, [:username, :email, :role, :team, :password_hash])
      |> validate_required([:username, :email, :role, :team, :password_hash])
      |> validate_format(:email, ~r/^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/)
      |> unique_constraint(:email)
      |> encrypt_and_put_password

  end

  defp encrypt_and_put_password(user) do
    with password_hash <- fetch_field!(user, :password_hash) do
      encrypted_password = Bcrypt.Base.hash_password(password_hash, Bcrypt.gen_salt(12, true))
      put_change(user, :password_hash, encrypted_password)
    end
  end

end
