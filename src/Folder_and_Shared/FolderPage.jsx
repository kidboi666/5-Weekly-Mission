import Layout from "Layout";
import { FolderPageLayout } from "./page-frame";
import { SearchBar } from "./ui/SearchBar";
import { LinkForm } from "./ui/LinkForm";

export const FolderPage = function () {
	return(
		<Layout position={"static"}>
			<FolderPageLayout
			linkForm={<LinkForm/>}
			searchBar={<SearchBar/>}
			/>
		</Layout>
	);
}