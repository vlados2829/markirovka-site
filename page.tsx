import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MarkirovkaPage() {
  return (
    <div className="p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Маркировка товаров — быстро и по лучшей цене</h1>
        <p className="text-xl text-gray-600">Полное сопровождение по системе "Честный Знак" за 1 день</p>
        <div className="flex justify-center gap-4">
          <Button>Оставить заявку</Button>
          <Button variant="outline">Купить маркировку</Button>
        </div>
        <div className="flex justify-center pt-6">
          <Image src="/images/chestny-znak-logo.png" alt="Честный Знак" width={180} height={60} />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          "🚀 Скорость — оформление и передача кодов за 1 день",
          "💰 Цена — одни из самых доступных на рынке",
          "🧩 Все категории — работаем с ИП, бизнесом, импортёрами и производителями",
          "📄 Документы — полное юридическое подтверждение всех услуг",
          "🔄 Под ключ — вы просто отправляете данные, остальное делаем мы",
        ].map((adv, i) => (
          <Card key={i}><CardContent className="p-4 text-sm">{adv}</CardContent></Card>
        ))}
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Наши услуги</h2>
        <ul className="space-y-4 text-base">
          <li>
            <strong>🔹 Продажа маркировок по ЭДО:</strong> Передаём готовые коды маркировки через ЭДО для всех категорий клиентов, кроме производителей и импортёров. Вы отправляете ИНН и список товаров — мы всё оформляем и передаём. Срок — максимум 1 день.
          </li>
          <li>
            <strong>🔹 Создание маркировок:</strong> Генерация кодов для производителей, импортёров и остатков. Мы создаём коды, регистрируем их в системе "Честный Знак", подготавливаем и передаём документы.
          </li>
          <li>
            <strong>🔹 Доставка документов:</strong> Отправка документов по ЭДО или почтой. Включает акты, реестры кодов, подтверждение оказания услуг.
          </li>
        </ul>
        <div className="pt-4">
          <Image src="/images/markirovka-process.png" alt="Процесс маркировки" width={800} height={400} className="mx-auto rounded-xl shadow-md" />
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-gray-50 p-6 rounded-xl space-y-2">
        <h2 className="text-xl font-semibold">Гарантии</h2>
        <ul className="list-disc list-inside text-base">
          <li>✔ Работаем официально — по договору или оферте</li>
          <li>✔ Все операции подтверждаются документально</li>
          <li>✔ В случае ошибок — бесплатно переделаем</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Готовы начать?</h2>
        <p className="text-base">Оставьте заявку или свяжитесь с нами прямо сейчас</p>
        <div className="flex justify-center gap-4">
          <Button>Оставить заявку</Button>
          <Button variant="outline">Получить консультацию</Button>
        </div>
        <div className="text-sm text-gray-500">
          Телефон: <a href="tel:+79991644593" className="text-blue-600 hover:underline">+7 999 164-45-93</a> · Telegram: <a href="https://t.me/gilman_188" className="text-blue-600 hover:underline">@gilman_188</a><br />
          Email: info@вашдомен.ру · ЭДО: СБИС / Диадок / Контур
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 border-t pt-4">
        © 2025. Все права защищены. Услуги маркировки товаров "Честный Знак". Политика конфиденциальности · Пользовательское соглашение
      </footer>
    </div>
  );
}
