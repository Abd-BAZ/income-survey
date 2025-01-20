import { getFirestore, doc, getDoc, setDoc, increment } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const db = getFirestore(app);

// Function to update visitor count
async function updateVisitorCount() {
    const countRef = doc(db, "siteAnalytics", "visitorCount");
    
    try {
        const docSnapshot = await getDoc(countRef);
        if (docSnapshot.exists()) {
            // Increment count
            await setDoc(countRef, { count: increment(1) }, { merge: true });
        } else {
            // Initialize count if the document doesn't exist
            await setDoc(countRef, { count: 1 });
        }
    } catch (error) {
        console.error("Error updating visitor count: ", error);
    }
}

// Call the function when the page loads
updateVisitorCount();
