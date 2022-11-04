defmodule Api.WorkingTest do
  use Api.DataCase

  alias Api.Working

  describe "workingtime" do
    alias Api.Working.Time

    import Api.WorkingFixtures

    @invalid_attrs %{end: nil, start: nil}

    test "list_workingtime/0 returns all workingtime" do
      time = time_fixture()
      assert Working.list_workingtime() == [time]
    end

    test "get_time!/1 returns the time with given id" do
      time = time_fixture()
      assert Working.get_time!(time.id) == time
    end

    test "create_time/1 with valid data creates a time" do
      valid_attrs = %{end: ~N[2022-10-25 10:04:00], start: ~N[2022-10-25 10:04:00]}

      assert {:ok, %Time{} = time} = Working.create_time(valid_attrs)
      assert time.end == ~N[2022-10-25 10:04:00]
      assert time.start == ~N[2022-10-25 10:04:00]
    end

    test "create_time/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Working.create_time(@invalid_attrs)
    end

    test "update_time/2 with valid data updates the time" do
      time = time_fixture()
      update_attrs = %{end: ~N[2022-10-26 10:04:00], start: ~N[2022-10-26 10:04:00]}

      assert {:ok, %Time{} = time} = Working.update_time(time, update_attrs)
      assert time.end == ~N[2022-10-26 10:04:00]
      assert time.start == ~N[2022-10-26 10:04:00]
    end

    test "update_time/2 with invalid data returns error changeset" do
      time = time_fixture()
      assert {:error, %Ecto.Changeset{}} = Working.update_time(time, @invalid_attrs)
      assert time == Working.get_time!(time.id)
    end

    test "delete_time/1 deletes the time" do
      time = time_fixture()
      assert {:ok, %Time{}} = Working.delete_time(time)
      assert_raise Ecto.NoResultsError, fn -> Working.get_time!(time.id) end
    end

    test "change_time/1 returns a time changeset" do
      time = time_fixture()
      assert %Ecto.Changeset{} = Working.change_time(time)
    end
  end
end
