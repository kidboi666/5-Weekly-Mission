import { AddLink } from "../components/AddLink/AddLink";
import { Layout } from "../components/Layout/Layout";

function FolderPage() {
  return (
    <Layout isSticky={false} userId="1">
      <AddLink></AddLink>
    </Layout>
  );
}

export default FolderPage;
