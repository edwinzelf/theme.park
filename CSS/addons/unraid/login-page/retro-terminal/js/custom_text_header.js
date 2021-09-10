
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>.______   .______       __  ____    ____  _______ 
|   _  \  |   _  \     |  | \   \  /   / |   ____|
|  |_)  | |  |_)  |    |  |  \   \/   /  |  |__   
|   ___/  |      /     |  |   \      /   |   __|  
|  |      |  |\  \----.|  |    \    /    |  |____ 
| _|      | _| `._____||__|     \__/     |_______|
                                                  </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
