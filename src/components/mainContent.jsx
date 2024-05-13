import moment from "moment";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TbError404 } from "react-icons/tb";

const content = () => {
  const latest = useSelector((state) => state.newsByCategory);

  return (
    <section className="flex gap-[30px]">
      <div className="w-fit flex flex-wrap gap-5 justify-center">
        {latest == null && (
          <Alert className="fade-in-10 fade-out-10">
            <TbError404 className="h-6 w-6" />
            <AlertTitle className="ml-3">Mohon Maaf!</AlertTitle>
            <AlertDescription className="ml-3">
              Data berita yang anda pilih sedang tidak dapat dimuat! Silahkan
              pilih kategori lain
            </AlertDescription>
          </Alert>
        )}
        {latest != null && Object?.keys(latest).length
          ? latest.posts.map((key, index) => {
              return (
                <Link href={key.link} target="_blank">
                  <Card key={index} className="card-side-content h-[350px]">
                    <CardHeader>
                      <img
                        className="rounded-[8px] w-[200px] h-[112px]"
                        src={key.thumbnail}
                        alt="Picture News"
                        srcSet=""
                      />
                    </CardHeader>
                    <div className="flex flex-col h-[130px] gap-4">
                      <CardContent>
                        <CardTitle className="height-[64px]">
                          {key.title}
                        </CardTitle>
                        <CardDescription className="text-paragraph-dot mt-3">
                          {key.description}
                        </CardDescription>
                      </CardContent>
                    </div>
                    <CardFooter className="pt-3">
                      <CardTitle className="text-[12px]">
                        {moment(key.pubDate).format("ddd, D MMM YYYY HH:mm")}
                      </CardTitle>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })
          : Array(8)
              .fill()
              .map((key) => {
                return (
                  <div key={key} className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                );
              })}
      </div>
    </section>
  );
};

export default content;
