defmodule Api.Working.Time do
  use Ecto.Schema
  import Ecto.Changeset

  schema "workingtime" do
    field :end, :naive_datetime
    field :start, :naive_datetime
    field :user, :id

    timestamps()
  end

  @doc false
  def changeset(time, attrs) do
    time
    |> cast(attrs, [:start, :end, :user])
    |> validate_required([:start, :end, :user])
  end
end
