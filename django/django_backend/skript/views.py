from django.shortcuts import render
from django.http import HttpResponse
from django.db.models.functions import ExtractMonth
from skript.models import Ticket
from django.db.models import Count

# Create your views here.
def main(request):
    #ll = list(Ticket.objects.values().annotate(created_month=ExtractMonth('createdAt')))

    data = list(Ticket.objects.annotate(month=ExtractMonth('createdAt')).values('month').annotate(count=Count('id')).values('month', 'count'))

    months = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6:"June", 
    7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December" }

    dataParts1 = []
    dataParts2 = []

    for dataPart in data:
        print(months[dataPart['month']])
        print(dataPart['count'])

        dataParts1.append(months[dataPart['month']])
        dataParts2.append(dataPart['count'])

    return render(request, 'main.html', {'dataParts1': dataParts1, 'dataParts2': dataParts2})