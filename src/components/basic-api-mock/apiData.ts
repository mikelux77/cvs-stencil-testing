export class ApiData {

    public static readonly fetchData = () => {
        return {
            statusCode: "0000",
            body: {
                data: [
                    "Apple",
                    "Banana",
                    "Cherry",
                    "Grape",
                    "Watermelon",
                ]
            }
        }
    }
}