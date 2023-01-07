# Projekt Zarówkowy

Projekt polega na stworzeniu aplikacji w architekturze mikroserwisowej, a także
na uruchomieniu jej z wykorzystaniem K3S. W projekcie zawarte zostanie również
porównanie rozwiązania K3S do podobnych mu rozwiązań.

# Serwisy w architekturze

## Serwis urządzen

Serwis jest odpowiedzialny za administrację danymi o urządzeniach zawartych
w systemie. Dane przechowywane przez serwis obejmują:

- nazwę urządzenia
- identyfikator API urządzenia

## Serwis grup

Serwis jest odpowiedzialny za administrację danymi o grupach zawartych
w systemie. Dane przechowywane przez serwis obejmują:

- nazwę grupy
- Listę nazw urządzeń należących do tej grupy

## Serwis scenariuszy

Odpowiedzialny za administrację danymi związanymi z działaniami podejmowanymi
na urządzeniach. Dane przechowywane przez serwis obejmują

- Nazwę instrukcji
- Listę predykatów które należy spełnić w celu wyzwolenia scenariusza
- Listę akcji podejmowanych w przypadku wyzwolenia scenariusza

## Serwis brokera MQTT

Odpowiedzialny za przyjmowanie komunikatów od czujników i realizacje scenariuszy

## Serwis aplikacji

Umozliwia uzytkownikowi zarządzanie systemem urządzeniami w systemie, a także scenariuszami

# Mocki urządzen IOT

## Mock zarowki

Subskrybuje topic IOT_DEV_ACTUATOR
na topicu publikowane są wiadomości postaci
DEV_NAME:ACTION:PARAM1,PARAM2,PARAM3...

Zarowka reaguje w przypadku, gdy DEV_NAME z komunikatu i jego nazwa urządzenia się pokrywają
W interfejsie zdefiniowane są następujące akcje

CHANGE_INTENSITY
z jednym parametrem z zakresu 1 do 1000 - intensywnością oświetlenia

CHANGE_COLOR
z trzema parametrami określającymi kolejno składowe R, G i B koloru światła

## Mock rolety

Subskrybuje topic IOT_DEV_ACTUATOR

Roleta reaguje w przypadku gdy DEV_NAME z komunikatu i jego nazwa urządzenia się pokrywają
W interfejsie zdefiniowane są następujące akcje

## Mock czujnik ruchu

Publikuje na topicu IOT_DEV_SENSOR

## Opis działania
Każde urządzenie podłączające się do systemu zwraca się do systemu
i zostaje przydzielone do jednego z brokerów MQTT - słucha go na określonym
topicu - następnie reaguje na polecenia otrzymywane z topica. W bazie danych
zostaje zapisane mapowanie urządzenia na adres brokera MQTT.

Gdy do serwisu brokera przychodzi polecenie, na początku sprawdzane jest, czy urządzenie,
do którego skierowane jest polecenie nasłuchuje tego samego brokera. Jeśli nie - 
pobierany jest adres poprawnego brokera z bazy danych zawierającej odpowiednie mapowanie,
a całość zapytania jest przekierowana do niego. W ten sposób przy założeniu równomiernego
rozłożenia obciążenia przez load balancer, każda instancja otrzyma jedynie 2/n requestów gdzie
n to liczba wszystkich requestów skierowanych do brokera

Serwis urządzeń jest serwisem odpowiedzialnym za aktualizację danych o podłączonych urządzeniach.
Urządzenia będą pingowane co 60 sekund w celu stałej aktualizacji listy urządzeń podłączonych do systemu

Serwis aplikacji jest serwisem frontowym - są w nim przetwarzane requesty użytkownika takie jak:
rejestracja urządzenia w systemie, zdefiniowanie reguł dla poszczególnych grup urządzeń


## przykładowe użycie

Użytkownik wchodzi do panelu aplikacji - rejestruje 5 urządzeń (żarówek) - dwie
na pierwszym piętrze, trzy na drugim piętrze. Tworzy dwie grupy reprezentujące piętra
i tworzy regułę związaną z obecnością ludzi na piętrach. W przypadku obecności gości na danym
piętrze, włącza białe światło w każdym pokoju o temperaturze barwowej powiązanej z temperaturą pomieszczenia.
Dla uproszczenia zakładamy że na każdym piętrze występują urządzenia sprawdzające obecność ludzi
a w każdym pokoju istnieją urządzenia do pomiaru temperatury. Reguły maja postać
"When people [are/aren't] on floor [1/2] turn the lights [on/off]"