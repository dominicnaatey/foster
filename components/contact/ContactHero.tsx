export default function ContactHero() {
  return (
    <div className="w-full">
      <div
        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px]"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 35%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvzSPh4j3bUl56Bfi42tp6P2d0yrUaEPFzyPfdJTOU0jho7-eQClTA6jKuaBFZBJ5DzlqhAxjWwlLDD6fALoCsu-bhYFjOtWSPf6SzDhh1NSsXM9XNE5iKVOMKGK1IkVLE8J3lhhBHC9NL9ABmNcEgGw_W4COzh7j1ZYM6YWwlYKIqllSIh3FwJ1LToaxHtugpcJXDQMYCEVk2x9ho2SHzbdWEDLHMDd2U30g9INjT9gcB5hdOhnr4MUAcjmduDwXb9BlYHCdTbQ")',
        }}
      >
        <div className="flex p-8">
          <p className="text-white text-5xl font-bold leading-tight tracking-tight">Let&apos;s Connect</p>
        </div>
      </div>
    </div>
  );
}
