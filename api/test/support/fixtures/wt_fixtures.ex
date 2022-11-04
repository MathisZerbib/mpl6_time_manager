defmodule Api.WTFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.WT` context.
  """

  @doc """
  Generate a working_time.
  """
  def working_time_fixture(attrs \\ %{}) do
    {:ok, working_time} =
      attrs
      |> Enum.into(%{
        end: ~N[2022-10-26 14:35:00],
        start: ~N[2022-10-26 14:35:00],
        user: "some user"
      })
      |> Api.WT.create_working_time()

    working_time
  end
end
