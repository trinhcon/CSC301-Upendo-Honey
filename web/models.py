from django.db import models


class CommonModel(models.Model):
    class Meta:
        abstract = True

class CustomImageField(models.ImageField):
    def value_to_string(self, obj):
        return obj.fig.url

class Batch(CommonModel):
    forest = models.ForeignKey('Forest',
                               on_delete=models.CASCADE,
                               help_text="Forest that Batch came from, optional", )
    honey = models.ForeignKey('Honey',
                               on_delete=models.CASCADE,
                               help_text='Batch honey, optional', )

    class Meta:
        verbose_name_plural = 'batches'

    def __str__(self):
        return f'Batch: Forest {self.forest.title}, Honey: {self.honey_id}'


class BatchMember(CommonModel):
    alphanum_code = models.CharField(primary_key=True,
                                     max_length=15,
                                     help_text="Alphanumeric Code")
    batch = models.ForeignKey('Batch', on_delete=models.CASCADE)
    beekeeper = models.ForeignKey('Beekeeper', on_delete=models.CASCADE)
    logo = CustomImageField(upload_to='images/')
    external_url = models.URLField()

    def __str__(self):
        return f'BatchMember: alphanum_code {self.alphanum_code}'


class Beekeeper(CommonModel):
    name = models.CharField(max_length=50)
    bio = models.TextField()
    photo = CustomImageField(upload_to='images/')
    letter_text = models.TextField()
    letter_photo = CustomImageField(upload_to='images/')

    def __str__(self):
        return f'Beekeeper: {self.name}'


class Forest(CommonModel):
    title = models.CharField(max_length=50)
    map_kml = models.FileField(upload_to='maps/', null=True, blank=True)
    photo = CustomImageField(upload_to='images/')
    area = models.IntegerField(help_text="Forest area")
    animals = models.CharField(max_length=50, help_text="Forest animals")
    beekeeper_count = models.IntegerField(help_text="Number of beekeepers")
    plants = models.CharField(max_length=50, help_text="Forest plants")

    def __str__(self):
        return f'Forest: {self.title}'


class Honey(CommonModel):
    name = models.CharField(max_length=50)
    variety_message = models.CharField(max_length=50)
    jar_photo = CustomImageField(upload_to='images/')
    honey_description = models.TextField(help_text='Honey description')

    class Meta:
        verbose_name_plural = 'honey'

    def __str__(self):
        return f'Honey: {self.name}'
