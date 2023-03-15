import "./style.css";
import { renderDashboard } from "./views/view-dashboard";
import { renderDetail } from "./views/view-detail";

if (window.location.search.includes("?country=")) {
  renderDetail();
} else {
  document.querySelector(".filters").classList.add("active");
  renderDashboard();
}
