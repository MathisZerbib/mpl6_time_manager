defmodule Api.WTTest do
  use Api.DataCase

  alias Api.WT

  describe "workingtimes" do
    alias Api.WT.WorkingTime

    import Api.WTFixtures

    @invalid_attrs %{end: nil, start: nil, user: nil}

    test "list_workingtimes/0 returns all workingtimes" do
      working_time = working_time_fixture()
      assert WT.list_workingtimes() == [working_time]
    end

    test "get_working_time!/1 returns the working_time with given id" do
      working_time = working_time_fixture()
      assert WT.get_working_time!(working_time.id) == working_time
    end

    test "create_working_time/1 with valid data creates a working_time" do
      valid_attrs = %{end: ~N[2022-10-26 14:35:00], start: ~N[2022-10-26 14:35:00], user: "some user"}

      assert {:ok, %WorkingTime{} = working_time} = WT.create_working_time(valid_attrs)
      assert working_time.end == ~N[2022-10-26 14:35:00]
      assert working_time.start == ~N[2022-10-26 14:35:00]
      assert working_time.user == "some user"
    end

    test "create_working_time/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = WT.create_working_time(@invalid_attrs)
    end

    test "update_working_time/2 with valid data updates the working_time" do
      working_time = working_time_fixture()
      update_attrs = %{end: ~N[2022-10-27 14:35:00], start: ~N[2022-10-27 14:35:00], user: "some updated user"}

      assert {:ok, %WorkingTime{} = working_time} = WT.update_working_time(working_time, update_attrs)
      assert working_time.end == ~N[2022-10-27 14:35:00]
      assert working_time.start == ~N[2022-10-27 14:35:00]
      assert working_time.user == "some updated user"
    end

    test "update_working_time/2 with invalid data returns error changeset" do
      working_time = working_time_fixture()
      assert {:error, %Ecto.Changeset{}} = WT.update_working_time(working_time, @invalid_attrs)
      assert working_time == WT.get_working_time!(working_time.id)
    end

    test "delete_working_time/1 deletes the working_time" do
      working_time = working_time_fixture()
      assert {:ok, %WorkingTime{}} = WT.delete_working_time(working_time)
      assert_raise Ecto.NoResultsError, fn -> WT.get_working_time!(working_time.id) end
    end

    test "change_working_time/1 returns a working_time changeset" do
      working_time = working_time_fixture()
      assert %Ecto.Changeset{} = WT.change_working_time(working_time)
    end
  end
end
