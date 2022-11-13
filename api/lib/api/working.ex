defmodule Api.Working do
  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Working.Time

  def list_workingtime do
    Repo.all(Time)
  end

  def get_time!(id), do: Repo.get!(Time, id)

  def get_time_by_userId(id) do
    Time
    |> where(user: ^id)
    |> Repo.all()
  end

  def get_time_by_userId_n_id(id, userId) do
    Time
    |> where(user: ^userId, id: ^id)
    |> Repo.one()
  end

  def create_time(attrs \\ %{}) do
    %Time{}
    |> Time.changeset(attrs)
    |> Repo.insert()
  end

  def update_time(%Time{} = time, attrs) do
    time
    |> Time.changeset(attrs)
    |> Repo.update()
  end

  def delete_time(%Time{} = time) do
    Repo.delete(time)
  end

  def change_time(%Time{} = time, attrs \\ %{}) do
    Time.changeset(time, attrs)
  end
end
