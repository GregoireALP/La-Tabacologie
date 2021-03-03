import DasboardDataForm from "./views/DashboardDataForm";
import DashboardMain from "./views/DashboardMain";
import AdminTabacoDataRegister from "./views/private/AdminTabacoDataRegister";

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
    {
        name: "Données Tabacs",
        component: AdminTabacoDataRegister,
        route: "/data-register"
    }
]