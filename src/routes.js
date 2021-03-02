import DasboardDataForm from "./views/DashboardDataForm";
import DashboardMain from "./views/DashboardMain";

export default [

    {
        name: "Acceuil",
        component: DashboardMain,
        route: "/"
    },
    {
        name: "Données",
        component: DasboardDataForm,
        route: "/data"
    },
]