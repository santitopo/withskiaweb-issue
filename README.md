Clean expo project (Expo 51) to showcase the runtime issue when using `WithSkiaWeb` util and changing props dynamically.

With the current setup, which is deferring the App component registration until `skia` finishes loading, the sample component renders correctly both on mobile and web.

## Reproduce the crash

To reproduce the crash, do the following:

1. In `index.web.tsx`, uncomment the normal App registration, and comment the deferred registration

   ```ts
   // LoadSkiaWeb().then(async () => {
   //   renderRootComponent(App);
   // });
   renderRootComponent(App);
   ```

2. In `app/(tabs)/index.tsx`, uncomment the SkiaComponent (which internally uses `WithSkiaWeb` just for web)

```ts
   import SkiaComponent from "@/components/SkiaComponent/SkiaComponent";
   // import BaseSkiaComponent from "@/components/SkiaComponent/BaseSkiaComponent";

       <SkiaComponent contentSize={size} borderSize={2} />


      {/* <BaseSkiaComponent contentSize={size} borderSize={2} /> */}

```


You will see how it loads for a second and immediately crashes with `Cannot read properties of null (reading 'rangeMin')` error as soon as the first state update happens

<img width="500" alt="image" src="https://github.com/user-attachments/assets/c0eb06cc-c531-4736-9c3a-294e028b2208">

## Run the project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run start
   [w] for web
   [i] for ios
   [a] for android
   ```
