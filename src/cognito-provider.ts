import { CognitoIdentityServiceProvider } from "aws-sdk"

const cognitoidentityserviceprovider = new CognitoIdentityServiceProvider({ region: 'ap-southeast-1' });

const main = async () => {
    const res = await cognitoidentityserviceprovider.listUserPools({
        MaxResults: 60
    }).promise();
    console.log(res)
}

main();