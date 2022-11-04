defmodule Api.WorkingFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Working` context.
  """

  @doc """
  Generate a time.
  """
  def time_fixture(attrs \\ %{}) do
    {:ok, time} =
      attrs
      |> Enum.into(%{
        end: ~N[2022-10-25 10:04:00],
        start: ~N[2022-10-25 10:04:00]
      })
      |> Api.Working.create_time()

    time
  end
end
