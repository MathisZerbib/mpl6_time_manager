defmodule Api.Working do
  @moduledoc """
  The Working context.
  """

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Working.Time

  @doc """
  Returns the list of workingtime.

  ## Examples

      iex> list_workingtime()
      [%Time{}, ...]

  """
  def list_workingtime do
    Repo.all(Time)
  end

  @doc """
  Gets a single time.

  Raises `Ecto.NoResultsError` if the Time does not exist.

  ## Examples

      iex> get_time!(123)
      %Time{}

      iex> get_time!(456)
      ** (Ecto.NoResultsError)

  """
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

  @doc """
  Creates a time.

  ## Examples

      iex> create_time(%{field: value})
      {:ok, %Time{}}

      iex> create_time(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_time(attrs \\ %{}) do
    %Time{}
    |> Time.changeset(attrs)
    |> Repo.insert()
  end


  @doc """
  Updates a time.

  ## Examples

      iex> update_time(time, %{field: new_value})
      {:ok, %Time{}}

      iex> update_time(time, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_time(%Time{} = time, attrs) do
    time
    |> Time.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a time.

  ## Examples

      iex> delete_time(time)
      {:ok, %Time{}}

      iex> delete_time(time)
      {:error, %Ecto.Changeset{}}

  """
  def delete_time(%Time{} = time) do
    Repo.delete(time)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking time changes.

  ## Examples

      iex> change_time(time)
      %Ecto.Changeset{data: %Time{}}

  """
  def change_time(%Time{} = time, attrs \\ %{}) do
    Time.changeset(time, attrs)
  end
end
