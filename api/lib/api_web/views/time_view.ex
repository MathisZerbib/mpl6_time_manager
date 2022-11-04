defmodule ApiWeb.TimeView do
  use ApiWeb, :view
  alias ApiWeb.TimeView

  def render("index.json", %{workingtime: workingtime}) do
    %{data: render_many(workingtime, TimeView, "time.json")}
  end

  def render("show.json", %{time: time}) do
    %{data: render_one(time, TimeView, "time.json")}
  end

  def render("time.json", %{time: time}) do
    %{
      id: time.id,
      start: time.start,
      end: time.end,
      user: time.user
    }
  end
end
