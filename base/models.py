from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE

# Create your models here.

class Address(models.Model):
    user =  user =  models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    phone =  models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200)
    country = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200,)
    state = models.CharField(max_length=200,)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    accountNumber=  models.CharField(max_length=500, null=True, blank=True)
    
    def __str__(self):
        return str(self.user)


class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(
        max_digits=9, decimal_places=2, null=True, blank=True)
    chargesFee = models.DecimalField(
        max_digits=9, decimal_places=2, null=True, blank=True)    
    reference = models.CharField(max_length=300, blank=True,null=True)
    accountNumber = models.CharField(max_length=200, null=True, blank=True)
    accountName = models.CharField(max_length=200, null=True, blank=True)
    status = models.BooleanField(default=False)
    history = models.BooleanField(default=False)

    def __str__(self):
        return str(self.accountName)


