import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { toast } from "react-toastify";

export default function Dashboard() {
  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Signed out successfully");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      <nav style={{ display: 'flex', alignItems: 'center', backgroundColor: '#ffffff', padding: '16px 40px', borderBottom: '1px solid #e2e8f0', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#0ea5e9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>+</div>
          <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '18px', letterSpacing: '-0.5px' }}>PhysioControl</span>
        </div>
        
        <button 
          onClick={handleLogout} 
          style={{ padding: '8px 16px', fontSize: '14px', fontWeight: 500, color: '#ef4444', backgroundColor: '#fef2f2', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          Sign Out
        </button>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 40px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
            Main Management Dashboard
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px' }}>
            Welcome to the central control panel of the Physical Therapy Clinic.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', fontWeight: 500, marginBottom: '8px' }}>Scheduled Patients</h3>
            <p style={{ fontSize: '28px', fontWeight: 700, color: '#0284c7' }}>12</p>
          </div>
          <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', fontWeight: 500, marginBottom: '8px' }}>Active Areas</h3>
            <p style={{ fontSize: '28px', fontWeight: 700, color: '#0ea5e9' }}>4 / 6</p>
          </div>
        </div>
      </main>

    </div>
  );
}
