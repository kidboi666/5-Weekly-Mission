// id 테스트

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import axios from "../../lib/axios";
// import { MainSearchBar } from "../../components";

// export default function Folder() {
//   const router = useRouter();
//   const [user, setUser] = useState();
//   const { id, q } = router.query;

//   // 유저 정보
//   async function getUser(targetId: string | string[]) {
//     const res = await axios.get(`/sample/user`);
//     const nextUser = res.data;
//     setUser(nextUser);
    
//     console.log(targetId);
//     console.log(nextUser);
//   }

//   useEffect(() => {
//     if (!id) return;

//     getUser(id);
//   }, [])

//   if (!user) return null;

//   return (
//     <div>
//       유저 {id} 페이지
//       <MainSearchBar />
//       <h2>{q} 검색 결과</h2>
//       <h4>{user.name}</h4>
//       <h4>{user.email}</h4>
//       <h4>{user.profileImageSource}</h4>
//     </div>
//   );
// }