import { ConnectChecker } from "@/components/connect/connectChecker";
import { Card } from "@/components/UI/card";

export default function Login(){
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="w-80 ">
                <ConnectChecker/>
            </Card>
        </div>
    )
}