import "./style.css";
import { renderDashboard } from "./view-dashboard";
import { renderDetail } from "./view-detail";

if (window.location.search.includes("?country=")) {
  renderDetail();
} else {
  document.querySelector(".filters").classList.add("active");
  renderDashboard();
}
