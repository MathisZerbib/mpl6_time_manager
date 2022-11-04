defmodule Api.ClocksFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Clocks` context.
  """

  @doc """
  Generate a clock.
  """
  def clock_fixture(attrs \\ %{}) do
    {:ok, clock} =
      attrs
      |> Enum.into(%{
        status: true,
        time: ~N[2022-10-26 14:34:00],
        user: "some user"
      })
      |> Api.Clocks.create_clock()

    clock
  end
end
