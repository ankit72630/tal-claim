import DashboardPage from "../../pages/dashboard/DashboardPage";
import ClaimsPage from "../../pages/claims/ClaimsPage";

const MainBody = ({ selectedMenu }) => {
  const renderContent = () => {
    if (selectedMenu === "Dashboard") return <DashboardPage />;
    if (selectedMenu === "Claim") return <ClaimsPage />;
    return <div className="text-gray-500">Select a menu item</div>;
  };

  return (
    <main className="flex-1 p-5">
      <div className="bg-white p-5 rounded-xl shadow-sm">{renderContent()}</div>
    </main>
  );
};

export default MainBody;
