var members = [
    "https://images-na.ssl-images-amazon.com/images/I/61zTGIEvQoL.jpg", 
    "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg",
    "https://c8.alamy.com/comp/2AH271G/beautiful-indian-woman-pretty-lady-cartoon-character-usable-for-traditional-holidays-lohri-pongal-independence-day-of-india-etc-vector-illustr-2AH271G.jpg", 
    "https://thumbs.dreamstime.com/b/teenage-cute-boy-isolated-white-background-vector-cartoon-illustration-vector-cartoon-illustration-teenage-boy-182166648.jpg", 
    ];

    var names = [
    "My Family-Book", 
    "Raghawendra deo", 
    "Priyanka Pandey", 
    "Aditya pandey", 
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }