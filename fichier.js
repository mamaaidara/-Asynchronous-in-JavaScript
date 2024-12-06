//Tâche 01: Itérer avec Async/Await

async function iteratWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise (resolve => setTimeout(resolve, 1000));

    }
}

//Tâche 02: Attendre un appel

async function awaitCall() {
    const fakeApiCall = () => new Promise(resolve => setTimeout(() => resolve({ data: 'Hello, World!' }), 1000));
   const response = await fakeApiCall ();
   console.log(response.data);
}

//Tâche 04: Attente de requêtes simultanées
async function concurrentRequests(){
    const fakeApiCall1 = () => new Promise(resove => setTimeout(()=> resolve('Result 1'), 1000));
    const fakeApiCall2 = () => new Promise(resolve => setTimeout(() => resolve('Result2'),2000));
    const [result1, result2] = await Promise.all([fakeApiCall1(),fakeApiCall2() ]);
    console.log(result1, result2);
}