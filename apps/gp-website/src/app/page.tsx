import ExampleComps from '@/components/example';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */

  const envValue = String(process.env.NEXT_PUBLIC_TEST_ENV ?? 'fail read .env');
  return (
    <div className="container mx-auto space-y-4">
      <h1 className="mt-12 text-3xl font-semibold">
        <span className="text-blue-400"> Hello {envValue},</span>
        <br />
        Welcome @geonet-v3/gp-website
      </h1>

      <ExampleComps />
    </div>
  );
}
