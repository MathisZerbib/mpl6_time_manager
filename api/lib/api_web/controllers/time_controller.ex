defmodule ApiWeb.TimeController do
  use ApiWeb, :controller

  alias Api.Working
  alias Api.Working.Time

  action_fallback ApiWeb.FallbackCotroller

  def index(conn, _params) do
    workingtime = Working.list_workingtime()
    render(conn, "index.json", workingtime: workingtime)
  end

  def create(conn, %{"time" => time_params}) do
    with {:ok, %Time{} = time} <- Working.create_time(time_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.time_path(conn, :show, time))
      |> render("show.json", time: time)
    end
  end

  def post_time_by_userId(conn, %{"userId" => userId, "time" => time_params}) do
    time_params = Map.put(time_params,"user",userId)
    with {:ok, %Time{} = time} <- Working.create_time(time_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.time_path(conn, :show, time))
      |> render("show.json", time: time)
    end
  end

  def show(conn, %{"id" => id}) do
    workingtime = Working.get_time_by_userId(id)
    render(conn, "index.json", workingtime: workingtime)
  end


  def get_time_by_userId_n_id(conn, %{"id" => id, "userId" => userId}) do
    time = Working.get_time_by_userId_n_id(id, userId)
    render(conn, "show.json", time: time)
  end

  def update(conn, %{"id" => id, "time" => time_params}) do
    time = Working.get_time!(id)

    with {:ok, %Time{} = time} <- Working.update_time(time, time_params) do
      render(conn, "show.json", time: time)
    end
  end

  def delete(conn, %{"id" => id}) do
    time = Working.get_time!(id)

    with {:ok, %Time{}} <- Working.delete_time(time) do
      send_resp(conn, :no_content, "")
    end
  end
end
