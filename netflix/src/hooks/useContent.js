import { useEffect, useState, useContext} from "react";


export default function useContent(target) {
    const [content, setContent] = useState([]);

    useEffect(() => {

            getFirestore().collection(target)
            .get
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return { [target]: content };
}