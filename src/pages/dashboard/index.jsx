import { Container } from 'react-bootstrap';
import SBreadCrumb from '../../components/Breadcrumb';

export default function DashboardPage() {
  return (
    <>
      <Container className="mt-3">
        <SBreadCrumb />
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
